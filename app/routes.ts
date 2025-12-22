import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/HomePage.tsx"),
    route("acceuil", "routes/acceuil.tsx"),
    route("dashboard", "routes/dashboard.tsx"),

    // Authentification
    route("login", "routes/LoginPage.tsx"),
    route("register", "routes/RegisterPage.tsx"),
    route("forgot-password", "routes/ForgotPasswordPage.tsx"),

    // Services
    route("services", "routes/ServicesPage.tsx"),
    route("services/:id", "routes/ServiceDetailPage.tsx"),
    route("CreateServicePage", "routes/CreateServicePage.tsx"),
    route("my-services", "routes/MyServicesPage.tsx"),
    route("edit-service/:id", "routes/EditServicePage.tsx"),

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

    // Contact
    route("contact", "routes/ContactPage.tsx"),

] satisfies RouteConfig;