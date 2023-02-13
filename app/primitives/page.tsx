import { Container } from '@ui/Container';

import { Disclosure } from '@ui/Headless';
import { Provider } from '../../features/notifications/NotificationProvider';
import XD from './XD';

export default function page() {
	return (
		<Provider>
			<Container>
				<XD />
			</Container>
		</Provider>
	);
}
