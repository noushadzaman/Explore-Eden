import { DateRange } from 'react-date-range';

const Calender = ({ value, handleSelect }) => {
    return (
        <DateRange
            rangeColors={['#F43F5E']}
            direction='vertical'
            showDateDisplay={false}
            ranges={[value]}
            // onChange={handleSelect}
            // date={value.startDate}
            // minDate={value.startDate}
            // maxDate={value.endDate}
        />
    );
};

export default Calender;