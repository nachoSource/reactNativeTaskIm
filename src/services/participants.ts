import Api from "../api";
import { ParticipantProps } from "../components/ParticipantsList/Participant";

const fetchParticipants = async (): Promise<ParticipantProps[]> =>
  await Api.get("/vendedorespersonas/?evento=14");

export { fetchParticipants };
