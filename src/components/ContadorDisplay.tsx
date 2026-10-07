import { StyleSheet, Text, View } from 'react-native';

/**
 * Props de `ContadorDisplay`.
 */
export interface ContadorDisplayProps {
  /** Número que se muestra (ya lo calculó el contenedor). */
  valor: number;
  /** Texto opcional que describe el contador. Si no viene, no se dibuja. */
  etiqueta?: string;
}

/**
 * Muestra el valor de un contador.
 *
 * @remarks
 * Componente **presentacional** ("dummy"): no tiene estado ni hooks; solo recibe
 * props y las dibuja. Por eso se reutiliza para todos los contadores.
 *
 * @param props - Ver la interfaz `ContadorDisplayProps`.
 */
export function ContadorDisplay({ valor, etiqueta }: ContadorDisplayProps) {
  return (
    <View style={styles.wrap}>
      {etiqueta && <Text style={styles.etiqueta}>{etiqueta}</Text>}
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 3,
    borderColor: '#0A0A0A',
    borderRadius: 12,
    backgroundColor: '#FFFDF9',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  valor: {
    fontSize: 44,
    fontWeight: '900',
    color: '#0A0A0A',
  },
});
