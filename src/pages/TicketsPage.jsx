import TicketsMap from "@/components/tickets/TicketsMap";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const locations = [
  {
    id: 1,
    lat: 22.585,
    lng: 88.3461,
    name: "Howrah Bridge",
    description:
      "An iconic bridge over the Hooghly River, connecting Kolkata and Howrah.",
  },
  {
    id: 2,
    lat: 22.5448,
    lng: 88.3426,
    name: "Victoria Memorial",
    description:
      "A grand marble building dedicated to Queen Victoria, now a museum and tourist destination.",
  },
  {
    id: 3,
    lat: 22.5794,
    lng: 88.4273,
    name: "Salt Lake City (Bidhannagar)",
    description:
      "A planned satellite township with residential complexes, parks, and shopping centers.",
  },
  {
    id: 4,
    lat: 22.5393,
    lng: 88.407,
    name: "Science City Kolkata",
    description:
      "A large science museum featuring interactive exhibits and an IMAX theater.",
  },
  {
    id: 5,
    lat: 22.6067,
    lng: 88.4652,
    name: "Eco Park",
    description:
      "An urban park with water activities, themed gardens, and eco-friendly attractions.",
  },
  {
    id: 6,
    lat: 22.503,
    lng: 88.353,
    name: "Rabindra Sarobar Lake",
    description:
      "A scenic lake with walking trails, boating, and recreational areas.",
  },
  {
    id: 7,
    lat: 22.5853,
    lng: 88.471,
    name: "Newtown Action Area 1",
    description:
      "A modern residential and commercial area with IT parks and entertainment zones.",
  },
  {
    id: 8,
    lat: 22.5369,
    lng: 88.3331,
    name: "Alipore Zoological Gardens",
    description:
      "One of the oldest zoos in India, home to a variety of animals and birds.",
  },
];

const TicketCard = ({ name, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default function TicketsPage() {
  return (
    <div className="flex gap-8">
      <ScrollArea
        style={{ height: "calc(100vh - 64px - 32px)" }}
        className="flex-1"
      >
        <div className="h-max space-y-4">
          {locations.map((location) => {
            return (
              <TicketCard
                name={location.name}
                description={location.description}
              />
            );
          })}
        </div>
      </ScrollArea>
      <TicketsMap locations={locations} />
    </div>
  );
}
