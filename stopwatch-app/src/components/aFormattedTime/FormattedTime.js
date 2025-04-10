import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    const formatTime = millseconds => {
    };

    return (
        <div className={styles.component}>
            {formatTime(time)}
        </div>
    );

};

export default FormattedTime;