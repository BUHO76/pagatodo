import { View, Text, Pressable} from 'react-native'

type ChipsProps<T extends string> = {
    title: string;
    selected: boolean;
}

function Chips<T extends string>({
    title,
    selected
}:ChipsProps<T>) {
    return (
        <View>
            <Text>{title}</Text>
            <Pressable
            ></Pressable>
        </View>
    )
}