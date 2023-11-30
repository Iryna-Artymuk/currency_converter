import PropTypes from 'prop-types';

import { convertTimestamp } from '@/utils/convertTime';
import { ContentWrapper, StyledText } from './StyledTime';

const Time = ({ timeStamp }) => {
  return (
    <ContentWrapper>
      <StyledText>
        the latest exchange rate update {convertTimestamp(timeStamp)}
      </StyledText>
    </ContentWrapper>
  );
};

export default Time;

Time.propTypes = {
  timeStamp: PropTypes.number,
};
