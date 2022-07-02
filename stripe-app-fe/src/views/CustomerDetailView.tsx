import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import {
  Box,
  Button,
  ContextView,
  FocusView,
  Inline,
  TextArea,
} from "@stripe/ui-extension-sdk/ui";
import { useEffect, useState } from "react";
import { addNoteAPI, getNotesForCustomerAPI } from "../api";
import Notes from "../components/Notes";
import { Note } from "../types";
import BrandIcon from "./brand_icon.svg";

const App = ({ userContext, environment }: ExtensionContextValue) => {
  const customerId = environment?.objectContext?.id;

  const agentId = userContext?.account.id || ""; //todo
  const agentName = userContext?.account.name || ""; //todo

  const [picker, setPicker] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [notes, setNotes] = useState<Note[] | null>(null);

  const getNotes = () => {
    getNotesForCustomerAPI({ id: customerId }).then((data: Note[]) => {
      setNotes(data);
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
          Add note
        </Button>
      }
    >
      <FocusView
        title="Add a new note"
        shown={picker}
        onClose={() => setPicker(false)}
        primaryAction={
          <Button
            type="primary"
            onPress={async () => {
              await addNoteAPI({ customerId, message });
              setPicker(false);
              getNotes();
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
