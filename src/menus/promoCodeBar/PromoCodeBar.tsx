import dayjs from "dayjs";
import { X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./style.module.scss";

const PromoCodeBar = (props: any) => {
  const { close, promoCodeItem } = props;
  const [currentTime, setCurrentTime] = useState("");
  const [currentDays, setCurrentDays] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date(
      dayjs.unix(promoCodeItem?.endDate).format("MMM D, YYYY HH:MM:DD")
    ).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCurrentTime(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s"
      );
      setCurrentDays(days);
      setCurrentHours(hours);
      setCurrentMinutes(minutes);
      setCurrentSeconds(seconds);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <X onClick={() => close()} size={24} className={styles.closeOffer} />
      <Container className="d-md-flex align-items-center justify-content-around justify-lg-content-between ">
        <div className={styles.offerInfo}>
          <div className={styles.offerText}>
            <span>{promoCodeItem.name}</span>
            {/* <div className={styles.promoCode}>
              <span>
                Use Promo Code - <span>{promoCodeItem?.code}</span>
              </span>
            </div> */}
          </div>
          <div className={styles.timerWrapper}>
            {/* <p className={styles.endsTitle}>
              <div>Use Promo Code</div>
              <div>{promoCodeItem?.code}</div>
            </p> */}

            <div className={styles.promoCode}>
              <span>
                <div className={styles.promoTitle}>Use Promo Code</div> <span>{promoCodeItem?.code}</span>
              </span>
            </div>

            <div className={styles.timer}>
              <span>
                <span>{currentDays}</span>
                <span>Days</span>
              </span>
              <div className={styles.colon}>:</div>
              <span>
                <span>{currentHours}</span>
                <span>Hours</span>
              </span>
              <div className={styles.colon}>:</div>
              <span>
                <span>{currentMinutes}</span>
                <span>Minutes</span>
              </span>
              <div className={styles.colon}>:</div>
              <span>
                <span>{currentSeconds}</span>
                <span>Seconds</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromoCodeBar;
