import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { Box, ContextView, Inline } from "@stripe/ui-extension-sdk/ui";
import { useEffect, useState } from "react";
import { getNotesForCustomerAPI } from "../api";
import Notes from "../components/Notes";
import { APIResponse, Note } from "../types";
import BrandIcon from "./brand_icon.svg";

const CustomerDetailView = ({
  userContext,
  environment,
}: ExtensionContextValue) => {
  const customerId = environment?.objectContext?.id;

  const agentId = userContext?.account.id as string;
  const agentName = userContext?.account.name as string;

  const [notes, setNotes] = useState<Note[] | null>(null);

  const getNotes = () => {
    if (!customerId) {
      return;
    }

    getNotesForCustomerAPI({ customerId }).then((res: APIResponse) => {
      if (!res.data.error) {
        setNotes(res.data.notes);
      }
    });
  };

  useEffect(() => {
    getNotes();
  }, [customerId]);

  console.log(notes);

  return (
    <ContextView
      title="All Notes"
      description={agentName}
      brandColor="#F6F8FA"
      brandIcon={BrandIcon}
    >
      <Box css={{ stack: "y" }}>
        <Box css={{}}>
          <Inline
            css={{
              font: "heading",
              color: "primary",
              fontWeight: "semibold",
              paddingY: "medium",
            }}
          >
            View All Notes
          </Inline>

          <Notes notes={notes} />
        </Box>
      </Box>
    </ContextView>
  );
};

export default CustomerDetailView;
