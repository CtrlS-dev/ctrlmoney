const textInfo = document.querySelector('#text-info');
const loader = document.querySelector('#loader');

(async () => {
  try {
    const token = window.location.pathname.split('/')[3];
    const id = window.location.pathname.split('/')[2];
    await axios.patch(`/api/users/${id}/${token}`);
    window.location.pathname = '/login/'
  } catch (error) {
    loader.innerHTML = `
    <dotlottie-player src="https://lottie.host/b6d2c190-d0c4-4a0b-ab65-1d27ab35cfc3/0UGNegCyJT.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
    `;
    textInfo.innerHTML = error.response.data.error; 
  }
})();