import Swal from 'sweetalert2'
export const setMessage = (title, text, type) => {
	Swal.fire({
		title,
		text,
		icon: type,
		showConfirmButton: false,
		timer: 5000,
	})
}
