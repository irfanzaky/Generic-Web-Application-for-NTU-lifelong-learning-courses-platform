import { ApiClient } from 'admin-bro';
import { Box } from '@admin-bro/design-system';

const api = new ApiClient();

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
        "helo world"
    </div>
  )
};

export default Dashboard;