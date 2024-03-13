import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function Emailsubmit() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '+91', // Assuming this is the default value
        country: 'India', // Assuming this is the default value
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post('/api/sendEmail', formData);
            setMessage(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '+91',
                country: 'India',
                message: ''
            });
        } catch (error) {
            setMessage('Failed to send email. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };
    return <>
        <div className="emailsubmitsec">
            <button className="emailclickbtn" onClick={toggleFormVisibility}>
                Quick Enquiry<IoIosArrowUp />
            </button>
            {isFormVisible && (
                <div className="enquiryform">
                    <form className="form_e" onSubmit={handleSubmit}>
                        <div className="flex flex-sb">
                            <p>Tell us what you are looking for?</p>
                            <AiOutlineCloseCircle onClick={handleCloseForm} />
                        </div>
                        <div className="form_info">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Your Number" value={formData.phone} onChange={handleChange} required />
                            <input type="text" name="country" placeholder="Your country" value={formData.country} onChange={handleChange} required />
                            <textarea name="message" placeholder="Describe your requirement in details:" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
                            <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Now'}</button>
                            {message && <p>{message}</p>}
                        </div>
                    </form>
                </div>
            )}
        </div>
    </>
}