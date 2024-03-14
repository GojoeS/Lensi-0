"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props{
  id: string;
  name: string;
  username: string;
  imgUrl: string,
}

const UserCard = ({
  id,
  name,
  username,
  imgUrl, 
}: Props) => {

  const router = useRouter()

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image 
          src={imgUrl}
          alt="profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1 text-ellipsis">
          <p className="font-semibold text-[16.5px]">@{username}</p>
          <p className="text-small-medium text-[16px] text-gray-1">{name}</p>
        </div>
      </div>

      <Button className="user-card_btn" onClick={() => router.push(`/profile/${id}`)}>
        View
      </Button>
    </article>
  )
}

export default UserCard