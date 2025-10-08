import { Dot, Users } from "lucide-react";

export default function AboutSection() {
  const date = new Date();
  return (
    <aside className='text-sm grid gap-2'>
      {/* Followers and Followings */}
      <div className='flex items-center'>
        <Users className='size-4 text-muted-foreground' />
        &nbsp;
        <p className='cursor-pointer hover:text-blue-400'>
          <span>25k&nbsp;</span>
          <span className='text-muted-foreground'>followers</span>
        </p>
        <Dot className='size-4' />
        <p className='cursor-pointer hover:text-blue-400'>
          <span>8&nbsp;</span>
          <span className='text-muted-foreground'>followings</span>
        </p>
      </div>
      {/* Name */}
      <div>
        <label className='text-xs text-muted-foreground'>Name</label>
        <p>Daksh Kishore</p>
      </div>
      {/* About */}
      <div>
        <label className='text-xs text-muted-foreground'>About</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem alias eveniet veritatis fugit harum dolorum maxime impedit,
          unde quasi.
        </p>
      </div>
      {/* Website */}
      <div>
        <label className='text-xs text-muted-foreground'>Website</label>
        <div>
          <a
            className='text-blue-400 hover:underline'
            href='/some'
            target='_blank'
          >
            https://dakshdev.vercel.app
          </a>
        </div>
      </div>
      {/* Gender */}
      <div>
        <label className='text-xs text-muted-foreground'>Gender</label>
        <p>Male</p>
      </div>
      {/* Created On */}
      <div>
        <label className='text-xs text-muted-foreground'>Joining Date</label>
        <p>{date.toDateString()}</p>
      </div>
    </aside>
  );
}
