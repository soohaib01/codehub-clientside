import {Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export default function Mobile() {
  setInterval(() => {
    
      return (
          <div>
              <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
          </div>
      )
  }, 1500);
}