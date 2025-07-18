"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileRedirect = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session || !session.user?.name) return(router.replace('/login'));
        router.replace(`/profile/${session.user.name}`);
    }, [session, status, router]);

    return null;
};

export default ProfileRedirect;
