import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function IntelligentAlert() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Intelligent Alert</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold mb-2">Critical result detected</h3>
          <p className="text-sm text-muted-foreground mb-4">
            AI has detected a critical result in the following exam: MRI of Caitlin O'Connor. This result is flagged as critical based on an analysis of the image and patient history.
          </p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">View details</Button>
        </div>
      </CardContent>
    </Card>
  )
}

