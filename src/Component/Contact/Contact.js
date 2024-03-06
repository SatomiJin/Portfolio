import "./Contact.scss";
function Contact() {
  return (
    <div id="contact" className="contact-container grid wide" data-aos="flip-left" data-aos-duration="1500">
      <div className="contact-body row">
        <div className="contact__title col l-10 l-o-1 m-10 m-o-1 c-4 c-o-4">Contact</div>
        <div className="contact__slogan col l-o-1 m-10 m-o-1 c-10 c-o-1">If you need any assistance! Hit me up.👇</div>
        <div className="contact__info col l-10 l-o-1 m-10 m-o-1 c-10 c-o-1">
          <div className="contact__info-detail">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </div>
            <div className="info">
              <div className="title">Location</div>
              <div className="location">Hồ Chí Minh, Việt Nam</div>
            </div>
          </div>

          <div className="contact__info-detail">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>
            <div className="info">
              <div className="title">Location</div>
              <div className="location">
                <a href="mailto:trongdh0904@gmail.com">trongdh0904@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
