import * as React from 'react';
import format from 'date-fns/format';
import { Session as SessionType } from '../types';
import FormatTime from './FormatTime';

export interface Props {
  session: SessionType;
}

const dayFormat = 'iiii do MMMM';

const SessionDetails: React.FC<Props> = ({ session }) => {
  return (
    <ul className="SessionDetails">
      <li><FormatTime time={session.time} />, {format(new Date(session.date), dayFormat)}</li>
      {session.isSellingFast && <li><strong>Selling fast</strong></li>}
      {session.isSoldOut && <li><strong>Sold out</strong></li>}
      {session.isNoFreeTickets && <li>No free tickets</li>}
      {session.isSpecialEvent && <li>Special event</li>}
      {session.isPreviewScreening && <li>Preview</li>}
      {session.isBabyFriendly && <li>Baby friendly</li>}
    </ul>
  );
};

export default SessionDetails;
