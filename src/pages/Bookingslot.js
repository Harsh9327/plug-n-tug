import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

const EvChargingBookingForm = ({ onCountChange }) => {
  const form = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [uemail, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [count, setCount] = useState(0);
  const [formsubmitted, setformsubmitted] = useState(false);
  const [vehicleType, setVehicleType] = useState('2wheeler'); // Default vehicle type

  const deletionTime = 5000;
  const totalCount = 5;
  const charge = vehicleType === '2wheeler' ? 201 : 501; // Set charge based on vehicle type

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (count < totalCount) {
      setCount(prevCount => prevCount + 1);
    }

    setTimeout(() => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
        onCountChange({ count: count - 1 });
      }
    }, deletionTime);
    setformsubmitted(true);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_mpl4mEFOrxfsxU",
      currency: "INR",
      amount: amount * 100,
      name: "Thanks For Working With Team 404",
      description: "Thanks for purchasing",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
        navigate("/mainpage");
      },
      prefill: {
        name: "pay with team 404",
      },
      modal: {
        ondismiss: function () {
          alert('Payment window closed');
        },
        escape: true,
        width: Math.min(window.innerWidth - 60, 400),
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    const service_id = 'service_ofpkqxm';
    const template_id = 'template_zzznf2q';
    const publicKey = 'WY3vuzq7SgXRPvWeV';

    const message = `
      Subject: Confirmation of Your EV Charging Station Booking

      Dear ${name},

      Thank you for choosing our EV Charging Station Finder service. We have received your booking details and are excited to assist you in finding the perfect charging station for your electric vehicle.

      Below are the details of your booking:

      - Name: ${name}
      - Email: ${uemail}
      - Phone: ${phone}
      - Date: ${date}
      - Time: ${time}
      - vehicleType: ${vehicleType}

      ${charge} Payment Successfully !!

      Our team will promptly process your booking and get back to you with the recommended charging station options based on your preferences.

      If you have any further questions or need assistance, please feel free to contact us at 7854625841.

      Thank you again for choosing our service.

      Best regards,
      Plug&Tuge
    `;

    const templateParams = {
      from_name: "Plug&Tug",
      from_email: "plugtug.team404@gmail.com",
      to_email: uemail,
      message: message
    };

    emailjs.send(service_id, template_id, templateParams, publicKey)
      .then((response) => {
        console.log('email sent successfully!', response);
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setVehicleType('2wheeler');
      })
      .catch((error) => {
        console.log('error sending email:', error);
      });
  };


  return (
    <div className='bg-gray-600'>
      <div className="mx-auto p-6 rounded-md shadow-md mt-20 bg-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-black">EV Charging Station Booking</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-900">Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-900">Email:</span>
            <input
              type="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-900">Phone:</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-900">Date:</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-900">Time:</span>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-900">Vehicle Type:</span>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
            >
              <option value="2wheeler">2 Wheeler</option>
              <option value="4wheeler">4 Wheeler</option>
            </select>
          </label>

          <button
            type="submit"
            className="block w-full mt-4 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Book Slot
          </button>

          {formsubmitted && (<button
            className="block w-full mt-4 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => displayRazorpay(charge)}
          >
            Pay Now
          </button>)}

          <p className='mt-5 '>Connection: {count} out of {totalCount}</p>
        </form>
      </div>
    </div>
  );
};

export default EvChargingBookingForm;
