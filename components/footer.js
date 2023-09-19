// import Link from 'next/link'
import NewsletterForm from './newsletter-form'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="measure-narrow center mb4">
          <img className="db w4 center mb4 br0" src="/img/spp-logo.jpeg" alt="Santos Paving Pros logo" />
        </div>
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb1 primary">Santos Paving Pros</h3>
            <ul className="mb3">
              <li><a href="/" className="link">Home</a></li>
              <li><a href="/services" className="link">Our Services</a></li>
              <li><a href="/team" className="link">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb1 primary">Serving The Triangle Area</h3>
            <ul className="mb3">
              <li><a href="tel:9194285063" className="link">Call or Text<br />(919) 428-5063</a></li>
              {/* <li><a target="_blank" rel="noreferrer" href="https://squareup.com/appointments/book/afwc68r654y6i1/L8VCJCD01JR06/services" className="link">Book Online</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb2 primary">Social Media</h3>
            <ul className="mhn2">
              {/* <SocialIcon link="#" iconPath="/img/icons-facebook.svg" /> */}
              {/* <SocialIcon link="https://www.instagram.com/irondetails/" iconPath="/img/icons-instagram.svg" /> */}
              <SocialIcon link="https://www.facebook.com/SantosPavingProsLLC" iconPath="/img/icons-facebook.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
