// app/layout.tsx (ou src/app/layout.tsx)
import "./vendor/react-calendar-timeline.scss";
import "./globals.css";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="fr">

<body>{children}</body>

</html>
);
}