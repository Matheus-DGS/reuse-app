import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  icon: any
  title: string
  description: string
}

export default function InfoSection({ icon, title, description }: Props) {
  return (
    <View style={styles.card}>
      <MaterialIcons name={icon} size={32} color="#2E7D32" />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    color: '#263238',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    color: '#607D8B',
    lineHeight: 20,
  },
})