import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import {
  Banner,
  Box,
  Button,
  ContextView,
  FocusView,
  Icon,
  Inline,
  TextArea,
} from "@stripe/ui-extension-sdk/ui";
import { useEffect, useState } from "react";
import { addNoteAPI, getNotesForCustomerAPI } from "../api";
import Notes from "../components/Notes";
import { APIResponse, Note } from "../types";
import BrandIcon from "./brand_icon.svg";

const App = ({ userContext, environment }: ExtensionContextValue) => {
  const customerId = environment?.objectContext?.id;

  const agentId = userContext?.account.id || ""; //todo
  const agentName = userContext?.account.name || ""; //todo

  const [picker, setPicker] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showAddNoteSuccessMessage, setShowAddNoteSuccessMessage] =
    useState<boolean>(false);
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
      actions={
        <Button
          type="primary"
          css={{ width: "fill", alignX: "center" }}
          onPress={() => setPicker(true)}
        >
          <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
            <Icon name="addCircle" size="xsmall" />
            <Inline>Add note</Inline>
          </Box>
        </Button>
      }
    >
      {showAddNoteSuccessMessage && (
        <Box css={{ marginBottom: "small" }}>
          <Banner
            type="default"
            onDismiss={() => setShowAddNoteSuccessMessage(false)}
            title="Note created"
          />
        </Box>
      )}

      <FocusView
        title="Add a new note"
        shown={picker}
        onClose={() => setPicker(false)}
        primaryAction={
          <Button
            type="primary"
            onPress={async () => {
              await addNoteAPI({ customerId, message });
              setMessage("");
              setPicker(false);
              getNotes();
              setShowAddNoteSuccessMessage(true);
            }}
          >
            Save note
          </Button>
        }
        secondaryAction={
          <Button
            onPress={() => {
              setPicker(false);
            }}
          >
            Cancel
          </Button>
        }
      >
        <TextArea
          label="Message"
          placeholder="Looking for more enterprise features like SEO..."
          value={message}
          autoFocus
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </FocusView>

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

export default App;
