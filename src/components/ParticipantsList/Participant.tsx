import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import styles from "./ParticipantsList.style";

const Participant = ({ dark = false, item }: ParticipantProps) => {
  const { idEmpresa, idPersona, Apellido, Nombre, RazonSocial } = item;
  return (
    <View
      style={[styles.element, dark ? styles.elementDark : styles.elementLight]}
    >
      <Field dark={dark} label="idEmpresa" value={idEmpresa} />
      <Field dark={dark} label="idPersona" value={idPersona} />
      <Field dark={dark} label="Nombre" value={Nombre} />
      <Field dark={dark} label="Apellido" value={Apellido} />
      <Field dark={dark} label="Razón Social" value={RazonSocial} />
    </View>
  );
};

const Field = ({ dark = false, label, value }: FieldProps) => (
  <View style={styles.field}>
    <Text style={[styles.text, dark ? styles.textDark : styles.textLight]}>
      {label}
    </Text>
    <Text style={[styles.text, dark ? styles.textDark : styles.textLight]}>
      {value?.toString()}
    </Text>
  </View>
);

// TODO move types to src/interfaces
export type ParticipantProps = PropsWithChildren<{
  dark?: boolean;
  item: {
    idEmpresa: Number;
    idPersona: Number;
    Apellido: string;
    Nombre: string;
    RazonSocial: string;
  };
}>;
type FieldProps = PropsWithChildren<{
  dark?: boolean;
  label: string;
  value: string | Number;
}>;

export default Participant;
