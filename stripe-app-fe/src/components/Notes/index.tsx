import { Box, Inline, Link, List, ListItem } from "@stripe/ui-extension-sdk/ui";
import moment from "moment";
import { Note } from "../../types";

interface NotesProps {
  notes: Note[];
}

const Notes = ({ notes }: NotesProps) => {
  return (
    <Box css={{ marginTop: "medium" }}>
      {notes.map((note: Note, i: number) => {
        return (
          <List key={`messages_${i}`} aria-label="List of recent messages">
            <ListItem
              title={<Box>Note #{note.id}</Box>}
              secondaryTitle={
                <Box css={{ stack: "y" }}>
                  <Inline>{moment().calendar()}</Inline>
                  <Inline>{note.message}</Inline>
                </Box>
              }
              value={
                <Box css={{ marginRight: "xsmall" }}>
                  <Link
                    href={`https://dashboard.stripe.com/test/customers/${note.customerId}`}
                  >
                    View →
                  </Link>
                </Box>
              }
            />
          </List>
        );
      })}
    </Box>
  );
};

export default Notes;
