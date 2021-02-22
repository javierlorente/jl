import { jsx, Flex, Button, Box } from "theme-ui";
import { connect } from "frontity";
import { useEffect, useState } from "react";

const status = {
  rejected: "rejected",
  accepted: "accepted",
};
const storageStatus = "cookieconsent_status";

const CookieNotice = ({ state }) => {
  const [hiddenNotice, setHiddenNotice] = useState();

  useEffect(() => {
    const consent = window.localStorage.getItem(storageStatus);
    setHiddenNotice(consent);
  }, []);

  const setConsent = (consent) => {
    window.localStorage.setItem(storageStatus, consent);
    setHiddenNotice(true);
  };

  if (hiddenNotice || state.frontity.platform !== "client") {
    return null;
  }

  return (
    <section sx={{ variant: "notice" }}>
      <Box pt="xxs" mb="m">
        Utilizamos cookies propias y de terceros con finalidad analítica y
        mostrarte publicidad relevante para tus intereses
      </Box>
      <Flex sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => setConsent(status.rejected)}
          variant="buttons.link"
        >
          Rechazar
        </Button>
        <Button
          onClick={() => setConsent(status.accepted)}
          variant="primary.gradient"
        >
          Aceptar
        </Button>
      </Flex>
    </section>
  );
};

export default connect(CookieNotice);
