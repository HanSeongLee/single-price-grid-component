import React from "react";
import styles from './style.module.scss';

const SinglePriceGrid = () => {
    return (
        <div className={styles.singlePriceGrid}>
            <div className={styles.joinCommunity}>
                <h1 className={styles.title}>
                    Join our community
                </h1>
                <h2 className={styles.subtitle}>
                    30-day, hassle-free money back guarantee
                </h2>
                <p className={styles.description}>
                    Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                </p>
            </div>
            <div className={styles.subscription}>
                <h1 className={styles.title}>
                    Monthly Subscription
                </h1>
                <div className={styles.priceBlock}>
                    <span className={styles.price}>$29</span>
                    &nbsp;<span className={styles.unit}>per month</span>
                </div>
                <p className={styles.description}>
                    Full access for less than $1 a day
                </p>
                <button className={styles.signUpButton}
                        aria-label={'Sign Up'}
                        title={'Sign Up'}
                >
                    Sign Up
                </button>
            </div>
            <div className={styles.whyUs}>
                <h1 className={styles.title}>
                    Why Us
                </h1>
                <p className={styles.description}>
                    {`Tutorials by industry experts
                    Peer & expert code review
                    Coding exercises
                    Access to our GitHub repos
                    Community forum
                    Flashcard decks
                    New videos every week`}
                </p>
            </div>
        </div>
    );
};

export default SinglePriceGrid;
