'use client'

import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface ButonActionTableProps {
    url: string;
}

const ButonActionTable: FC<ButonActionTableProps> = ({url}) => {
    const router = useRouter();

  return (
        <Button onClick={() => router.push(url)} size='icon' variant='outline'>
                    <MoreVertical className='w-4 h-4' />
        </Button> 
  )
}

export default ButonActionTable