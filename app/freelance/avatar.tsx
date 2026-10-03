/**
 * Illustrated portrait: a drawing, not a photo, so it never pretends to be one.
 * Proportions and colours taken from Dhanush's photo.
 */
export default function Avatar({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Illustrated portrait of Dhanush"
      className={className}
    >
      <defs>
        <clipPath id="avatar-clip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
        <clipPath id="avatar-face">
          <path d="M68 88C68 62 82 50 100 50s32 12 32 38c0 20-6 34-16 42-6 5-11 7-16 7s-10-2-16-7c-10-8-16-22-16-42z" />
        </clipPath>
      </defs>
      <g clipPath="url(#avatar-clip)">
        <rect width="200" height="200" fill="#E9E2D6" />

        {/* navy collared shirt */}
        <path d="M22 200c4-40 34-58 78-58s74 18 78 58z" fill="#1F2B4E" />
        <path d="M84 140l16 20-20-3-4-13z" fill="#2B3A66" />
        <path d="M116 140l-16 20 20-3 4-13z" fill="#2B3A66" />
        <path d="M100 160v40" stroke="#16203B" strokeWidth="2" />
        <circle cx="100" cy="174" r="1.8" fill="#3E4D7E" />
        <circle cx="100" cy="190" r="1.8" fill="#3E4D7E" />

        {/* neck */}
        <path d="M88 118h24v26c-8 6-16 6-24 0z" fill="#B4836A" />

        {/* ears */}
        <ellipse cx="67" cy="94" rx="6.5" ry="10" fill="#B4836A" />
        <ellipse cx="133" cy="94" rx="6.5" ry="10" fill="#B4836A" />

        {/* face: wide at the cheekbones, narrow chin */}
        <path
          d="M68 88C68 62 82 50 100 50s32 12 32 38c0 20-6 34-16 42-6 5-11 7-16 7s-10-2-16-7c-10-8-16-22-16-42z"
          fill="#C99A80"
        />

        {/* light stubble on jaw and chin */}
        <g clipPath="url(#avatar-face)" fill="#675149">
          <path d="M66 100c2 22 16 36 34 36s32-14 34-36c-4 13-12 21-21 21-6 4-20 4-26 0-9 0-17-8-21-21z" opacity="0.38" />
          <ellipse cx="100" cy="131" rx="11" ry="7" opacity="0.32" />
        </g>
        {/* thin moustache */}
        <path d="M88 110c5-3 19-3 24 0-5 1.6-19 1.6-24 0z" fill="#4A3730" />

        {/* thick black hair, volume on top, swept up */}
        <path
          d="M66 86C61 70 61 52 69 41C76 31 88 24 100 24C114 23 128 30 134 41C140 53 140 70 134 86C132 76 129 69 124 65C116 60 108 59 100 59C92 59 84 60 76 65C71 69 68 76 66 86Z"
          fill="#1C1C22"
        />
        <path d="M74 38l3-10 6 7 4-12 6 9 5-11 5 10 6-9 3 11 7-6 1 11z" fill="#1C1C22" />
        <path d="M80 50c6-8 14-14 24-16M92 52c6-8 14-14 24-16M70 58c4-7 10-12 18-15M108 54c5-6 12-10 20-11" fill="none" stroke="#34343C" strokeWidth="1.6" strokeLinecap="round" />

        {/* soft smile */}
        <path d="M91 118c5 3.5 13 3.5 18 0" fill="none" stroke="#7A4A36" strokeWidth="2.2" strokeLinecap="round" />

        {/* nose */}
        <path d="M100 94c-2 7-3 11 1 13" fill="none" stroke="#A57058" strokeWidth="2.2" strokeLinecap="round" />

        {/* thick straight eyebrows */}
        <path d="M76 79c6-2.5 12-2.5 18-1M106 78c6-1.5 12-1.5 18 1" fill="none" stroke="#1C1C22" strokeWidth="4" strokeLinecap="round" />

        {/* eyes */}
        <circle cx="86" cy="91" r="2.6" fill="#1C1C22" />
        <circle cx="114" cy="91" r="2.6" fill="#1C1C22" />

        {/* thin rectangular glasses */}
        <g fill="none" stroke="#141414" strokeWidth="2.3">
          <rect x="73" y="83" width="25" height="15" rx="3" />
          <rect x="102" y="83" width="25" height="15" rx="3" />
          <path d="M98 89h4M73 87l-6-2M127 87l6-2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
