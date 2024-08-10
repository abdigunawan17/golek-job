import { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewForm from "@/components/forms/OverviewForm"

interface SettingsPageProps {

}

const SettingPage: FC<SettingsPageProps> = () => {
  return (
    <div>
        <div className="font-semibold text-3xl mb-55">
        SettingPage
        </div>

        <Tabs defaultValue="overview">
          <TabsList className='mb-8'>
            <TabsTrigger value="overview">Applicants</TabsTrigger>
            <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <OverviewForm />
          </TabsContent>
          <TabsContent value="socialLinks">
            <div>
                lorems social
            </div>
          </TabsContent>
          <TabsContent value="team">
            <div>
                lorems team
            </div>
          </TabsContent>
        </Tabs>
    </div>
  )
}

export default SettingPage