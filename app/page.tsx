import { Button, Group } from "@mantine/core";

interface GlobalButtonProps {
  icon: React.ReactNode;
  iconAlignment: "left" | "right";
}

export default function GlobalButton({ icon, iconAlignment }: GlobalButtonProps) {
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
