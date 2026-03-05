import { ScrollView, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/CustomButton'
import InfoSection from '../components/InfoSection'

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Text style={styles.logo}>♻️ ReUse</Text>

      <Text style={styles.subtitle}>
        Encontre centros de reciclagem próximos e aprenda a descartar resíduos corretamente.
      </Text>

      <InfoSection
        icon="location-on"
        title="Centros de reciclagem próximos"
        description="O ReUse ajuda você a localizar pontos de coleta e centros de reciclagem perto da sua localização, facilitando o descarte responsável de materiais recicláveis."
      />

      <InfoSection
        icon="recycling"
        title="O que pode ser reciclado?"
        description="Aprenda quais materiais podem ser reciclados, como plástico, vidro, metal e papel, evitando o descarte incorreto que prejudica o meio ambiente."
      />

      <InfoSection
        icon="delete-outline"
        title="Como separar o lixo"
        description="Descubra como separar corretamente resíduos orgânicos e recicláveis, tornando o processo de reciclagem mais eficiente e sustentável."
      />

      <CustomButton
        title="Começar"
        onPress={() => alert('Funcionalidade futura: localizar reciclagem')}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F8E9',
  },

  content: {
    padding: 24,
    alignItems: 'center',
  },

  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 40,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#607D8B',
    lineHeight: 22,
  },
})