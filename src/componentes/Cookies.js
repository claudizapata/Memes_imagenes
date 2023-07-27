import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cookies = () =>{
    const MySwal = withReactContent(Swal)//traido de sweetAlert, para hacer combinacion de carteles
    Swal.fire('Bienvenido, aceptá las cookies');

    MySwal.fire({
        title: <p>Hello World</p>,
        /*didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.showLoading()
        },*/
      }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
      })

}
export default Cookies;