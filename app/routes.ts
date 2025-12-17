import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("dashboard", "routes/dashboard.tsx"),

    // Mes demandes
    route("mes-demandes", "routes/mesdemandes.tsx"),

    // Messagerie
    route("messagerie", "routes/messagerie.tsx"),
    route("messagerie/:id", "routes/messages.tsx"),

    // Profil
    route("profil", "routes/profil.tsx"),
    route("profil/modifier", "routes/profil-modifier.tsx"),
    route("profil/supprimer", "routes/profil-supprimer.tsx"),

    // Notifications
    route("notification", "routes/notification.tsx"),
    route("notification/:id", "routes/notification-detail.tsx"),
    route("notification/:id/supprimer", "routes/notification-delete.tsx"),

] satisfies RouteConfig;