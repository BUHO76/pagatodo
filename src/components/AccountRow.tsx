import { View, Text} from 'react-native'
import { Account } from '../feature/accounts/types';

export function AccountRow({ account }: { account: Account}) {
    return(
        <View>
            <Text>
                {account.name}
            </Text>
            <Text>
                {account.category}
            </Text>
            <Text>
                {account.balance}
            </Text>
            <Text>
                {account.lastTransaction}
            </Text>
            
        </View>
    )
}