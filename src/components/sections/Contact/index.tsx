import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import {useFormik} from "formik";
import Image from "next/image";
import * as Yup from "yup";
import css from "./style.module.css";

import CallIcon from "../../../../public/icons/call.svg";
import LocationIcon from "../../../../public/icons/location.svg";
import MailIcon from "../../../../public/icons/mail.svg";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Fill in the field"),
      email: Yup.string().email("Invalid email").required("Fill in the field"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className={css.section} id="contact">
      <div className="container">
        <SectionHeading>Contact us</SectionHeading>
        <div data-aos="zoom-in" className={css.contact}>
          <h3 className={css.contactTitle}>Leave us a message</h3>
          <div className={css.contactWrapper}>
            <form onSubmit={formik.handleSubmit} className={css.contactBox}>
              {formik.touched.name && formik.errors.name ? (
                <p className={css.error}>{formik.errors.name}</p>
              ) : null}
              <label className={css.input}>
                <input
                  className={css.input__field}
                  type="text"
                  placeholder=" "
                  {...formik.getFieldProps("name")}
                />
                <span className={css.input__label}>Name</span>
              </label>
              {formik.touched.email && formik.errors.email ? (
                <p className={css.error}>{formik.errors.email}</p>
              ) : null}
              <label className={css.input}>
                <input
                  className={css.input__field}
                  type="email"
                  placeholder=" "
                  {...formik.getFieldProps("email")}
                />
                <span className={css.input__label}>Your email</span>
              </label>
              <label className={css.input}>
                <textarea
                  rows={4}
                  className={css.input__field}
                  placeholder=" "
                  {...formik.getFieldProps("comment")}
                />
                <span className={css.input__label}>
                  Briefly describe your project
                </span>
              </label>
              <Button
                type="submit"
                className="md:mx-auto lg:mx-0 block"
                size="lg"
              >
                Send
              </Button>
            </form>
            <div className={css.contactBox}>
              <ul className={css.contactList}>
                <li className={css.contactListItem}>
                  <a
                    href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&amp;source=constructor"
                    className={css.contactListLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className={css.contactListIcon}
                      src={LocationIcon}
                      alt="Location"
                    />
                    Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                  </a>
                </li>
                <li className={css.contactListItem}>
                  <a href="tel:+998336600999" className={css.contactListLink}>
                    <Image
                      className={css.contactListIcon}
                      src={CallIcon}
                      alt="Phone"
                    />
                    +998 33 66 00 999
                  </a>
                </li>
                <li className={css.contactListItem}>
                  <a
                    href="mailto:azizbek.b@udevs.io"
                    className={css.contactListLink}
                  >
                    <Image
                      className={css.contactListIcon}
                      src={MailIcon}
                      alt="Email icon"
                    />
                    azizbek.b@udevs.io
                  </a>
                </li>
                <li className={css.contactListItem}>
                  <a
                    href="https://t.me/azizbekbakhodirov"
                    className={css.contactListLink}
                    target="_blank"
                  >
                    <svg
                      className={css.contactListIcon}
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="#1B5BF7"
                        d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                      ></path>
                    </svg>
                    <strong style={{color: "#1B5BF7"}}>
                      t.me/azizbekbakhodirov
                    </strong>
                  </a>
                </li>
              </ul>

              <div className={css.socials}>
                <a href="/" target="_blank">
                  <svg
                    className={css.socialIcon}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                  </svg>
                </a>
                <a href="/" target="_blank">
                  <svg
                    className={css.socialIcon}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
                <a href="/" target="_blank">
                  <svg
                    className={css.socialIcon}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="contact-module--twitter_link--3NxRZ"
                >
                  <svg
                    className={css.socialIcon}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </a>
              </div>
              <div className={css.map}>
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&amp;source=constructor"
                  width="400px"
                  height="200px"
                  title="Udevs location"
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
