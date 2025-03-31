"use client";

import { useEffect, useState } from "react";

import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
    value: string;
    onChange: (src: string) => void;
    disabled?: boolean;
};

export const ImageUpload = ({
    value,
    onChange,
    disabled
}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null;
    }

    return (
        <div className="space-y-4 w-full flex flex-col justify-center items-center">
            <CldUploadButton
                onUploadAdded={(result: CloudinaryUploadWidgetResults) => {
                    if (result.info && typeof result.info === 'object' && 'secure_url' in result.info) {
                        onChange(result.info.secure_url);
                    }
                }}
                options={{
                    maxFiles: 1
                }}
                uploadPreset="dfb2cqdr"
            >
                <div className="
                    p-4
                    border-4
                    border-dashed
                    border-primary/10
                    grounded-lg
                    hover:opacity-75
                    transiiton
                    flex
                    flex-col
                    space-y-2
                    items-center
                    justify-center
                ">
                    <div className="relative h-40 w-40">
                        <Image
                            fill
                            alt="Upload"
                            src={value || "/placeholder.webp"}//Placeholder Image Here
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </CldUploadButton>
        </div>
    )
}
