import { Box, SafeAreaView, ScrollView, VStack } from '@gluestack-ui/themed';

import MKConnect from '../moneyKitConnect/Connect';
import LinkInstitutionsText from './LinkInstitutionsText';

export default function LinkAccountsMobileScreen() {
	return (
		<SafeAreaView flex={1}>
			<Box
				flex={1}
				$android-bgColor="$white"
				$ios-bgColor="$white"
				display="flex"
				justifyContent="space-between"
				px="$2"
				pb="$4"
			>
				<ScrollView px="$4" showsVerticalScrollIndicator={false}>
					<VStack space="lg" py="$5">
						<LinkInstitutionsText />
					</VStack>
				</ScrollView>

				<MKConnect type="Secondary" buttonText="Connect institution" />
			</Box>
		</SafeAreaView>
	);
}
