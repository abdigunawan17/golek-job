import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { PartyPopperIcon } from "lucide-react"
import { FC } from "react"

interface JobDetailProps {

}

const JobDetail: FC<JobDetailProps> = () => {
  return (
    <div>
        <div className="grid grid-cols-3 w-full gap-5">
            <div className="col-span-2 space-y-10">
                <div>
                    <div className="text-3xl font-semibold">
                        Description
                    </div>
                    <div className="text-gray-500 mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Veniam molestiae quaerat ipsam quam illum labore provident 
                            quos doloribus voluptas saepe maiores blanditiis, 
                            vero laboriosam consequuntur sequi, perspiciatis aliquam unde quisquam?
                        </p>
                        
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-semibold">
                        Responbilities
                    </div>
                    <div className="text-gray-500 mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Veniam molestiae quaerat ipsam quam illum labore provident 
                            quos doloribus voluptas saepe maiores blanditiis, 
                            vero laboriosam consequuntur sequi, perspiciatis aliquam unde quisquam?
                        </p>
                        
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-semibold">
                        Who You Are
                    </div>
                    <div className="text-gray-500 mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Veniam molestiae quaerat ipsam quam illum labore provident 
                            quos doloribus voluptas saepe maiores blanditiis, 
                            vero laboriosam consequuntur sequi, perspiciatis aliquam unde quisquam?
                        </p>
                        
                    </div>
                </div>  
                <div>
                    <div className="text-3xl font-semibold">
                        Nice-To-Haves
                    </div>
                    <div className="text-gray-500 mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Veniam molestiae quaerat ipsam quam illum labore provident 
                            quos doloribus voluptas saepe maiores blanditiis, 
                            vero laboriosam consequuntur sequi, perspiciatis aliquam unde quisquam?
                        </p>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="text-3xl font-semibold">
                    About this role
                </div>

                <div className="shadow p-3 text-center my-6">
                    1 <span className="text-gray-500"> of 10 Capacity</span>
                    <Progress className="mt-3" value={12} />
                </div>

                <div className="mb-10 space-y-5">
                    <div className="flex justify-between">
                        <div className="text-gray-500">Apply before</div>
                        <div className="font-semibold">12 August 2024</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Job Posted On</div>
                        <div className="font-semibold">12 August 2024</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Job Type</div>
                        <div className="font-semibold">Full-time</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Salary</div>
                        <div className="font-semibold">$1200 - $1500 USD</div>
                    </div>
                </div>
                <Separator />

                

                <div className="my-10">
                    <div className="text-3xl font-semibold mb-4">
                        Categories
                    </div>

                    <div className="space-x-5">
                        
                        <Badge>Design</Badge>
                            
                    </div>
                </div>
                
                <Separator />


                <div className="my-10">
                    <div className="text-3xl font-semibold mb-4">
                        Required skills
                    </div>

                    <div className="space-x-5">
                        {["HTML", "Javascript"].map(
                            (item: string, i:number) => (
                                <Badge variant={"outline"} key={i}>{item}</Badge>
                            )
                        )}
                    </div>
                </div>

                

            </div>
        </div>

        <Separator />

        <div>
            <div className="text-3xl font-semibold">Perks & Benefit</div>
            <div className="text-gray-500">
                This job comes with several perks and benefitt
            </div>

            <div className="grid grid-cols-4 gap-5 mt-9">
                {[0, 1, 2].map((item: number) => (
                    <div key={item}> 
                        <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

                        <div className="text-lg font-semibold mb-3">Full healthcare</div>
                        <div className="text-gray-500">
                            we believe in thriving comunities and that starts with our team
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default JobDetail