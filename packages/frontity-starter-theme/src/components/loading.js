/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

const Loading = () => {
  return (
    <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
      <p>Cargando...</p>
    </Flex>
  );
};

export default Loading;
