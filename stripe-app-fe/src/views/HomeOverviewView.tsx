import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { Box, Button, ContextView, Inline } from "@stripe/ui-extension-sdk/ui";
import { FunctionComponent, useEffect, useState } from "react";
import { getAllNotesAPI } from "../api";
import Notes from "../components/Notes";

interface EmptyStateProps {
  name: string;
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({
  name,
}: EmptyStateProps) => {
  return (
    <ContextView title="Get started">
      <Box css={{ stack: "y" }}>
        <Inline
          css={{
            color: "primary",
            fontWeight: "semibold",
            marginY: "small",
          }}
        >
          Welcome {name}
        </Inline>
        <Inline
          css={{
            marginY: "small",
            color: "secondary",
          }}
        >
          Tabbed lets you keep notes on your customer conversations to help you
          serve them better.
        </Inline>

        <Inline
          css={{
            marginY: "small",
            color: "secondary",
          }}
        >
          Create a new note on an existing Customer to get started.
        </Inline>

        <Box css={{ marginY: "small" }}>
          <Button
            type="primary"
            href="https://dashboard.stripe.com/test/customers"
            css={{ width: "fill", alignX: "center" }}
          >
            Go to Customers list
          </Button>
        </Box>
      </Box>
    </ContextView>
  );
};

const HomeOverviewView = ({
  userContext,
  environment,
}: ExtensionContextValue) => {
  const agentId = userContext?.account.id || ""; // todo: deal with no id
  const agentName = userContext?.account.name || ""; // todo: deal with no name

  const [notes, setNotes] = useState<any>(null);

  const getAllNotes = () => {
    getAllNotesAPI().then((data) => {
      setNotes(data);
    });
  };

  useEffect(() => {
    getAllNotes();
  }, [agentId]);

  return (
    <>
      {notes ? (
        <ContextView title="Overview">
          <Box css={{ stack: "y" }}>
            <Inline
              css={{
                color: "primary",
                fontWeight: "semibold",
              }}
            >
              View All Notes
            </Inline>

            <Notes notes={notes} />
          </Box>
        </ContextView>
      ) : (
        <EmptyState name={agentName} />
      )}
    </>
  );
};

export default HomeOverviewView;
