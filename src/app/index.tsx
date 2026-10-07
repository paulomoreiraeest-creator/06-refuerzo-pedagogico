import { BotonContador } from '@/components/BotonContador';
import { ContadorDisplay } from '@/components/ContadorDisplay';
import { calcularValor, estadoUI, type ContadorConfig } from '@/domain/counter';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  // =========================
  // SANDUCHES
  // =========================
  const [valor, setValor] = useState(0);

  const config: ContadorConfig = {
    valor,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estado = estadoUI(valor, config);

  const incrementar = () => {
    setValor(calcularValor(config, 'incrementar'));
  };

  const decrementar = () => {
    setValor(calcularValor(config, 'decrementar'));
  };

  const reiniciar = () => {
    setValor(0);
  };

  // =========================
  // EMPANADAS
  // =========================
  const [valorEmpanadas, setValorEmpanadas] = useState(0);

  const configEmpanadas: ContadorConfig = {
    valor: valorEmpanadas,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estadoEmpanadas = estadoUI(valorEmpanadas, configEmpanadas);

  const incrementarEmpanadas = () => {
    setValorEmpanadas(
      calcularValor(configEmpanadas, 'incrementar')
    );
  };

  const decrementarEmpanadas = () => {
    setValorEmpanadas(
      calcularValor(configEmpanadas, 'decrementar')
    );
  };

  const reiniciarEmpanadas = () => {
    setValorEmpanadas(0);
  };

  // =========================
  // JUGOS
  // =========================
  const [valorJugos, setValorJugos] = useState(0);

  const configJugos: ContadorConfig = {
    valor: valorJugos,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estadoJugos = estadoUI(valorJugos, configJugos);

  const incrementarJugos = () => {
    setValorJugos(
      calcularValor(configJugos, 'incrementar')
    );
  };

  const decrementarJugos = () => {
    setValorJugos(
      calcularValor(configJugos, 'decrementar')
    );
  };

  const reiniciarJugos = () => {
    setValorJugos(0);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bar Salesiano · Contadores</Text>

        {/* SANDUCHES */}
        <ContadorDisplay
          valor={valor}
          etiqueta="Sanduches"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementar}
            variante="primary"
            disabled={estado === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementar}
            variante="secondary"
            disabled={estado === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciar}
            variante="danger"
          />
        </View>

        {/* EMPANADAS */}
        <ContadorDisplay
          valor={valorEmpanadas}
          etiqueta="Empanadas"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarEmpanadas}
            variante="primary"
            disabled={estadoEmpanadas === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementarEmpanadas}
            variante="secondary"
            disabled={estadoEmpanadas === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciarEmpanadas}
            variante="danger"
          />
        </View>

        {/* JUGOS */}
        <ContadorDisplay
          valor={valorJugos}
          etiqueta="Jugos"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarJugos}
            variante="primary"
            disabled={estadoJugos === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementarJugos}
            variante="secondary"
            disabled={estadoJugos === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciarJugos}
            variante="danger"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6D6',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});