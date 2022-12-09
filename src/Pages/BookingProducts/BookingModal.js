import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';


const BookingModal = ({ refetch, setAddProduct, addProduct, isLoading}) => {
    const {user} = useContext(AuthContext);

    if (isLoading) {
        return <p>Loading....</p>
    }
   
    const { name:product_name } = addProduct;
    console.log(product_name);
    
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            product: product_name,
            customer: name,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // console.log(booking);
        fetch('https://buy-sell-server-beta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setAddProduct('');
                toast.success('Booking Confirm');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
        // setTreatment(null);
    }

    const handlecloseModal = () => {
        setAddProduct('');
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handlecloseModal} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{addProduct?.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />

                        <input className='btn btn-accent w-full' type="submit" value="Confirm" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;