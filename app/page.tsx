import Image from "next/image";
import Button from "../Components/Button";
import Certificate from "../public/static/images/certificate.png";
export default function Page() {
  return (
    <div className='page'>
      <div className='hero'>
        <div className='info'>
          <div className='info-text'>
            <h2>
              Create and download your <span> professional certificates</span>{" "}
              for <span>free</span>
            </h2>
            <p>
              Generate professionally designed certificates for your staff,
              students etc.
            </p>
          </div>
          <div className="info-button">
          <Button text='Create a Certificate Now' />
       </div> </div>

        <div className='img px-4'>
          <Image alt='certificate' src={Certificate} />
        </div>
      </div>

      
    </div>
  );
}
