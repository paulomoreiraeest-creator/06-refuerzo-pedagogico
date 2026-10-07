export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';

export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

/**
 * Calcula el siguiente valor del contador aplicando una dirección y el paso.
 *
 * @param config - Configuración actual del contador (`valor`, `paso`, `minimo`, `maximo`).
 * @param direccion - `'incrementar'` para subir, `'decrementar'` para bajar.
 * @returns El nuevo valor, **siempre** dentro de `[minimo, maximo]`.
 *
 * @example
 * // Subir 1 desde 5 (con maximo 10) → 6
 * calcularValor({ valor: 5, paso: 1, minimo: 0, maximo: 10 }, 'incrementar');
 */
export function calcularValor(config: ContadorConfig, direccion: Direccion): number {
  const Valor2 =
    direccion == 'incrementar'
      ? config.valor + config.paso
      : config.valor - config.paso;

  return Math.min(config.maximo, Math.max(config.minimo, Valor2));
}

/**
 * Determina el estado de la interfaz según la posición del valor.
 *
 * @param valor - Número actual del contador.
 * @param config - Configuración del contador (usa `minimo` y `maximo`).
 * @returns `'MINIMO'` si el valor llegó al piso, `'MAXIMO'` si llegó al techo,
 *          `'IDLE'` en cualquier otro caso.
 */
export function estadoUI(valor: number, config: ContadorConfig): EstadoUI {
  if (valor == config.minimo) {
    return 'MINIMO';
  }

  if (valor == config.maximo) {
    return 'MAXIMO';
  }

  return 'IDLE';
}
