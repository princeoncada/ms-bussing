import ContactForm from "../ContactForm";
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";




export default function Contact() {
    return (
        <div className="w-full py-8">
            <h1 className='text-center text-2xl mb-4'>Contact Us</h1>
            <GoogleCaptchaWrapper>
                <ContactForm />
            </GoogleCaptchaWrapper>
        </div>
    );
}
