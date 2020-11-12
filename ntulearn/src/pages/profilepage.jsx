import React , {useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import CourseCard from "../components/course-card";
import { listCourses } from "../actions/coursesActions";

const Profilepage = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const courseList = useSelector((state) => state.courseList);
  const { courses, loading, error } = courseList;
  const { userInfo } = userSignin;
  let history = useHistory();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses());
    return () => {};
  }, []);
  
  const handleLogout = () => {
    Cookie.remove("userInfo")
    history.push("/home")
    history.go(0)
  };

  return (
    loading ? (
      <div>loading...</div>
    ) : error ?  (
      <div>{error}</div>
    ) : (
    <div className="flex-super-container">
      <table className='profile-table'>
        <tr>
          <th>Username</th>
          <td>{userInfo.username}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{userInfo.email}</td>
        </tr>
        <tr>
          <th>Role</th>
          <td>{userInfo.role}</td>
        </tr>
        <tr>
          <th>Course Enrolled</th>
          <td>{userInfo.courses.map((c)=><span> {c}, </span>)}</td>
        </tr>
      </table>
        
        <div className="flex-container">
          {courses
            .filter((course) => userInfo.courses.includes(course.courseID))
            .map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      <button className="button" onClick={handleLogout}>Logout</button>
    </div>
  )
  )
};

export default Profilepage;
