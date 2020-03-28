import axios from 'axios';
// this is an example of how can we create a service.
export default {
  async logout() {
    const { data: response } = await axios.post(`${win.GLOBAL_CMS.route}/api/account/logout`);
    if (response.correcto) {
      location.href = win.GLOBAL_CMS.route;
    } else {
      alert('something went wrong');
    }
  },
};