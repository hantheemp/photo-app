import { Button, Group } from "@mantine/core";

interface GlobalButtonInterface {
  icon: React.ReactNode;
  iconAlignment: "left" | "right";
  iconSize: Number;
}

export default function GlobalButton({ icon, iconAlignment, }: GlobalButtonInterface) {
  return (
    <Group justify="center">
      <Button
        leftSection={iconAlignment === "left" ? icon : undefined}
        rightSection={iconAlignment === "right" ? icon : undefined}
      >
        Click Me
      </Button>
    </Group>
  );
}
